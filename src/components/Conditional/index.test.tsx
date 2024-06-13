import { render, screen } from "@testing-library/react";
import { UserProps } from "./index";
import User from "./index";

describe("Conditional Rendering", () => {
    const adiminUserData: UserProps = { id: 1, name: "Tohid", isAdmin: true };
    test("Admin User ", () => {
        render(<User user={adiminUserData} />);
        // getByRole Suitable when the element is present in the DOM
        const editButton = screen.getByRole("button", { name: "Edit" });
        expect(editButton).toBeInTheDocument();
    });

    const nonAdminUserData: UserProps = { id: 1, name: "Tohid" };
    test("None Admin User ", () => {
        render(<User user={nonAdminUserData} />);
        // queryByRole Suitable when the element is not present in the DOM
        const editButton = screen.queryByRole("button", { name: "Edit" });
        expect(editButton).not.toBeInTheDocument();
    });
});
