import { rest } from "msw";

function getUsers() {
    return rest.get('https://6172cfe5110a740017222e2b.mockapi.io/elements', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "createdAt": "2021-10-22T12:13:22.338Z",
                    "name": "Pauline Blanda",
                    "avatar": "https://cdn.fakercloud.com/avatars/mkginfo_128.jpg",
                    "id": "1"
                },
                {
                    "createdAt": "2021-10-22T11:08:31.908Z",
                    "name": "Marguerite Turner",
                    "avatar": "https://cdn.fakercloud.com/avatars/alxndrustinov_128.jpg",
                    "id": "2"
                },
                {
                    "createdAt": "2021-10-22T08:21:48.912Z",
                    "name": "Eileen Blick",
                    "avatar": "https://cdn.fakercloud.com/avatars/linux29_128.jpg",
                    "id": "3"
                },
                {
                    "createdAt": "2021-10-22T04:35:55.163Z",
                    "name": "Nellie White PhD",
                    "avatar": "https://cdn.fakercloud.com/avatars/netonet_il_128.jpg",
                    "id": "4"
                },
                {
                    "createdAt": "2021-10-21T21:07:47.876Z",
                    "name": "Bill Russel",
                    "avatar": "https://cdn.fakercloud.com/avatars/vladyn_128.jpg",
                    "id": "5"
                },
                {
                    "createdAt": "2021-10-21T17:42:57.935Z",
                    "name": "Kara Simonis",
                    "avatar": "https://cdn.fakercloud.com/avatars/lisovsky_128.jpg",
                    "id": "6"
                },
                {
                    "createdAt": "2021-10-22T05:07:04.214Z",
                    "name": "Irvin Osinski DVM",
                    "avatar": "https://cdn.fakercloud.com/avatars/colgruv_128.jpg",
                    "id": "7"
                }
            ])
        );
    });
}

export const handlers = [getUsers()];