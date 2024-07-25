import { render, screen, waitFor } from "@testing-library/react";

import TagList from ".";

describe("TagList", () => {
    test("should render tags ", async () => {
        render(<TagList />);

        //    await waitFor(()=>{
        //         const listitems = screen.getAllByRole('listitem');
        //         expect(listitems.length).toBeGreaterThan(0)
        //     })

        // or 

        const listitems = await screen.findAllByRole("listitem");
        expect(listitems.length).toBeGreaterThan(0);
    });
});
