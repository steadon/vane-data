#!/bin/bash
# Start all services: Python API + WebSocket + Next.js
# Usage: bun run dev  (or bash start-all.sh)
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
API_DIR="$PROJECT_DIR/vane-data-api"
WEB_DIR="$PROJECT_DIR/vane-data-web"
WS_DIR="$WEB_DIR/ws-finance"

# ── Cleanup ────────────────────────────────────────────────────────────────────

_CLEANED=0
cleanup() {
    [ "$_CLEANED" -eq 1 ] && return
    _CLEANED=1
    echo ""
    echo "Stopping all services..."
    lsof -ti :3000 | xargs kill -9 2>/dev/null
    lsof -ti :3003 | xargs kill -9 2>/dev/null
    lsof -ti :8000 | xargs kill -9 2>/dev/null
    echo "All services stopped."
    exit 0
}
trap cleanup INT TERM

# ── Python API setup ───────────────────────────────────────────────────────────

echo "▶ Setting up Python API..."
cd "$API_DIR"

# Create virtualenv if it doesn't exist
if [ ! -d "venv" ]; then
    echo "  Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate venv
source venv/bin/activate

# Install/update dependencies
echo "  Installing Python dependencies..."
pip install -q -r requirements.txt

# Start API
echo "  Starting Python API on port 8000..."
python -u main.py > "$PROJECT_DIR/api.log" 2>&1 &
API_PID=$!
echo "  API PID: $API_PID"

# Wait for API to be ready (up to 15s)
echo "  Waiting for API to be ready..."
for i in $(seq 1 15); do
    if curl -s http://127.0.0.1:8000/api/health > /dev/null 2>&1; then
        echo "  API ready!"
        break
    fi
    if [ "$i" -eq 15 ]; then
        echo "  Warning: API did not respond in time. Check api.log for errors."
    fi
    sleep 1
done

# ── WebSocket service ──────────────────────────────────────────────────────────

echo "▶ Starting WebSocket service on port 3003..."
cd "$WS_DIR"
bun run dev > "$PROJECT_DIR/ws.log" 2>&1 &
WS_PID=$!
echo "  WS PID: $WS_PID"

# ── Next.js dev server ─────────────────────────────────────────────────────────

echo "▶ Starting Next.js on port 3000..."
cd "$WEB_DIR"
bun run dev &
DEV_PID=$!
echo "  Dev PID: $DEV_PID"

echo ""
echo "All services started:"
echo "  Frontend  → http://localhost:3000"
echo "  API       → http://localhost:8000"
echo "  API docs  → http://localhost:8000/docs"
echo "  WebSocket → http://localhost:3003"
echo ""
echo "Logs: api.log, ws.log  |  Press Ctrl+C to stop all."
echo ""

# Keep alive until Ctrl+C (trap handles cleanup)
while true; do
    sleep 60
done
