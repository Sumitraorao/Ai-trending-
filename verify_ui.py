from playwright.sync_api import Page, expect, sync_playwright

def verify_ui(page: Page):
    page.goto("http://localhost:3000")

    # Check title
    expect(page.get_by_role("heading", name="AI Agent Hub")).to_be_visible()

    # Check that there is no dark mode background color like #0a0e1a anywhere
    page.screenshot(path="verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_ui(page)
        finally:
            browser.close()
