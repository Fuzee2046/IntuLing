import uvicorn


def main() -> None:
    uvicorn.run(
        "intuling_api.main:app",
        host="127.0.0.1",
        port=8000,
        reload=True,
    )
