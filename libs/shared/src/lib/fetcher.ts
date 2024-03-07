export const fetcher = async (key: string) => {
    const response = await fetch(key);
    const data = await response.json();
    return data;
};

// Only for debugging and testing purposes, delays the response by 5 seconds
export const mockFetcherWithDelay = async (key: string) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return fetcher(key);
};
