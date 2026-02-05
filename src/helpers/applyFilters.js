const norm = (v) => (v ?? "").toString().toLowerCase().trim();

const normalizeKeys = (obj = {}) => {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [norm(k), v]));
}

export const applyFilters = (items, filters) => {
    const loc = norm(filters.location);
    const type = norm(filters.type)
    const equipments = (filters.equipments ?? []).map(norm)

    return items.filter((camper) => {
        const okLocation = !loc || norm(camper.location) === loc;

        const okType = !type || norm(camper.form) === type;

        const boolField = normalizeKeys(camper)
        const okEquip = equipments.length === 0 || equipments.every((key) => Boolean(boolField[key]));

        return okLocation && okType && okEquip
    })
}