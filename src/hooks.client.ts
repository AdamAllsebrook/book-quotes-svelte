import { currentUser, pb } from '$lib/pocketbase'

pb.authStore.onChange(() => {
    currentUser.set(pb.authStore.model)
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
})
pb.authStore.loadFromCookie(document.cookie)
