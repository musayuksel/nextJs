export async function fetchImages() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
