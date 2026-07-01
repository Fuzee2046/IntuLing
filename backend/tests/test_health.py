from intuling_api.main import create_app


def test_create_app() -> None:
    app = create_app()

    assert app.title == "IntuLing API"
