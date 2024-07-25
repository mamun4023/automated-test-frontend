import { http, HttpResponse } from "msw";

type userProps = {
    email: string;
    password: string;
};

export const handlers = [
    http.get("/users", () => {
        return HttpResponse.json({
            id: 1,
            name: "Tohid Islam",
            isAdmin: true,
        });
    }),

    http.post("/login", async ({ request }) => {
        const user = {
            email: "mock@gmail.com",
            password: "password",
        };

        const data: any = await request.json();

        if (user.email != data.email) {
            return HttpResponse.json({
                status: false,
            });
        }

        return HttpResponse.json({
            status: true,
        });
    }),
];
