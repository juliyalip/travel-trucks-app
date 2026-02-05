export const selectTrucksLoading = state => state.trucks.isLoading
export const selectTrucksItems = state => state.trucks.items
export const selectTrucksError = state => state.trucks.error

export const selectTruckDetails = state => state.truckDetails
export const selectTrucsResults = state => state.trucks.results;

export const selectVisibleTrucks = state => state.trucks.results.slice(0, state.trucks.visibleCount)

export const selectHasMoreTrucks = state => state.trucks.results.length > state.trucks.visibleCount

export const selectTrucksTotal = state => state.trucks.total