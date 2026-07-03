const linkUrls = [
  "taplink.olivierhayot.be",
  "linktree.olivierhayot.be",
]

export default defineNuxtRouteMiddleware((to, from) => {
  const url = useRequestURL()
  
  if (url && linkUrls.includes(url.hostname)) {
    return navigateTo('/links', { redirectCode: 301 })
  }
})