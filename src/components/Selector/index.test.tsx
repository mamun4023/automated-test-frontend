import { render, screen } from "@testing-library/react";
import OrderSelector from ".";

describe("Selector group", () => {
    const renderComponent = () => {
        render(<OrderSelector />);

        return {
            list: screen.getByRole("combobox"),
        };
    };

    test("should render the list ", () => {
        const { list } = renderComponent();
        expect(list).toHaveTextContent(/New/i);
        expect(list).toHaveTextContent(/Processing/i);
        expect(list).toHaveTextContent(/Completed/i);
    });
});
