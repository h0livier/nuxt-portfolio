const linkUrls = [
  "taplink.olivierhayot.be",
  "linktree.olivierhayot.be"
]

export default defineNuxtRouteMiddleware((to, from) => {
  const url = useRequestURL()

  if (linkUrls.includes(url.hostname) && to.path !== '/links') {
    return navigateTo('/links', { redirectCode: 301 })
  }
})