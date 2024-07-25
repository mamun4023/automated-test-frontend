import { render, screen } from "@testing-library/react";
import ExpandableText from ".";
import userEvent from "@testing-library/user-event";

describe("Expandable Text", () => {
    const shortTxt = "short text";
    const longTxt = "long text".repeat(256);
    test("should render the full text if less than 255 characters", () => {
        render(<ExpandableText text={shortTxt} />);
        expect(screen.getByText(shortTxt)).toBeInTheDocument();
    });

    test("should truncate text if longer than 255 characters", () => {
        const truncatedText = longTxt.substring(0, 255) + "...";
        render(<ExpandableText text={truncatedText} />);
        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/more/i);
    });

    test("should expand text when show more button clicked", async () => {
        render(<ExpandableText text= {longTxt} />)

        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button);

        expect(screen.getByText(longTxt)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);

    });

  
});
