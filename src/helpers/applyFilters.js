const norm = (v) => (v ?? "").toString().toLowerCase().trim();

const normalizeKeys = (obj = {}) => {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [norm(k), v]));
}

export const applyFilters = (items, filters = {}) => {
    const loc = norm(filters.location);
    const type = norm(filters.type)
    const selected = (filters.equipments ?? [].map(norm))

    return items.filter((camper) => {
        const okLocation = !loc || norm(camper.location) === loc;

        const okType = !type || norm(camper.form) === type;

        const boolFields = normalizeKeys(camper)

        const okSelected = selected.length === 0 ||
            selected.every((key) => {
                if (key === "automatic" || key === "manual") {
                    return norm(camper.transmission) === key
                }
                return Boolean(boolFields[key]);
            });
        return okLocation && okType && okSelected
    })
}


