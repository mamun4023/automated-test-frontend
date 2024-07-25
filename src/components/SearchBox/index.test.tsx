import { render, screen } from "@testing-library/react";
import SearchBox from ".";
import userEvent from "@testing-library/user-event";

describe("Search Box", () => {
    const renderSearchBox = () => {
        const onChange = vi.fn();
        render(<SearchBox onChange={onChange} />);

        return {
            input: screen.getByPlaceholderText(/search/i),
            user: userEvent.setup(),
            onChange,
        };
    };

    test("should render input field for searching", () => {
        const { input } = renderSearchBox();

        expect(input).toBeInTheDocument();
    });

    test("should  call onChange when enter is pressed", async () => {
        const { input, onChange } = renderSearchBox();

        const searchTerm = "SearchTerm";
        const user = userEvent.setup();
        await user.type(input, searchTerm + "{enter}");
        expect(onChange).toHaveBeenCalledWith(searchTerm);
    });

    test("should not call onChange when input is empty", async () => {
        const { input, onChange, user } = renderSearchBox();

        await user.type(input, "{enter}");
        expect(onChange).not.toHaveBeenCalled();
    });
});
