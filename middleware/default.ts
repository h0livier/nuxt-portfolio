const linkUrls = [
    "taplink.olivierhayot.be",
    "linktree.olivierhayot.be",
]

export default defineNuxtRouteMiddleware((to, from) => {
  const referer = useRequestHeader('referer')
  
  if (referer && linkUrls.includes(referer)) {
    return navigateTo('/links', { redirectCode: 301 })
  }
  
  return navigateTo('/', { redirectCode: 301 })
})