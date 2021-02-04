export const state = () => ({
    isLoggedIn : false,
    darkMode: false,
    isLoading : false
  })
  
export const mutations = {
    login (state) {
        state.isLoggedIn = true
        this.$router.push({
            path: `/posts`,
        })
    },
    logout (state) {
        state.isLoggedIn = false
        this.$router.push({
            path: `/`,
        })
    },
    darkModeOn(state){
        state.darkMode = true
    },
    darkModeOff(state){
        state.darkMode = false
    },
    fetching(state){
        state.isLoading = true
    },
    fetched(state){
        state.isLoading = false
    }
}