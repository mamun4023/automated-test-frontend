import { screen, render } from "@testing-library/react";
import User from ".";
import axios from "axios";

describe("Mock API test", () => {
    it("None Admin User", async () => {
        const resp = await fetch("/users");
        const user = await resp.json();
        render(<User user={user} />);
        const editButton = screen.getByRole("button", { name: "Edit" });
        expect(editButton).toBeInTheDocument();
    });

    it("Login", async () => {
        const data = {
            email: "mock@gmail.com",
            password: "password",
        };
        const resp = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Specify the content type as JSON
            },
            body: JSON.stringify(data),
        });
        const response = await resp.json();
        expect(response.status).toBe(true)

    });
});
