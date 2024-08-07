export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
}

// function to add query string parameters to url

export function addQuerryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
