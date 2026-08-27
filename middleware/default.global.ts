const linkUrls = [
  "taplink.olivierhayot.be",
  "links.olivierhayot.be"
]

export default defineNuxtRouteMiddleware((to, from) => {
  const url = useRequestURL()

  if (linkUrls.includes(url.hostname) && to.path !== '/links') {
    return navigateTo('/links', { redirectCode: 301 })
  }
})