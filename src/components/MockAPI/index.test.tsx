import { screen, render } from "@testing-library/react";
import User from ".";

describe("Mock API test", () => {
    it("None Admin User", async () => {
        const resp = await fetch("/users");
        const user = await resp.json();
        render(<User user={user} />);
        const editButton = screen.getByRole("button", { name: "Edit" });
        expect(editButton).toBeInTheDocument();
    });
});
