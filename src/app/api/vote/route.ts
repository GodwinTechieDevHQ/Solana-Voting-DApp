import { ActionGetResponse, ACTIONS_CORS_HEADERS } from "@solana/actions"

export const OPTIONS = GET;

export async function GET(request: Request) {
  const actionMetadata: ActionGetResponse = {
    icon: "https://cookieandkate.com/images/2025/01/peanut-butter-recipe.jpg",
    title: "Vote for your favorite type of peanut butter!",
    description: "Vote between crunchy and smooth peanut butter!",
    label: "Vote",
    links: {
      actions: [
        {
          label: "Vote for Crunchy",
          href: "/api/vote?candidate=crunchy"
        },
        {
          label: "Vote for Smooth",
          href: "/api/vote?candidate=smooth"
        }
      ]
    }

  };
  return Response.json(actionMetadata, { headers: ACTIONS_CORS_HEADERS}); 
}
