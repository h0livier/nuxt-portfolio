<template>
    <Cv />
    <div class="min-h-screen print:hidden">
        <p><a href="mailto:olivier.hayot.dev@gmail.com">olivier.hayot.dev@gmail.com</a></p>
        <div class="hero min-h-[80vh]">
            <div class="hero-content">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hi, I'm Olivier 👋</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <PrintButton></PrintButton>
                </div>
            </div>
        </div>
        <div>
            <h2>What drives me</h2>
            <div class="flex">
                <div class="grow">
                    <p>Solving Problems</p>
                    <p>I enjoy building user-friendly and efficient web applications that solve real problems.</p>
                </div>
                <div class="grow">
                    <p>Automation & Creating Tools</p>
                    <p>Turning small ideas into practical solutions is what keeps me curious and motivated.</p>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <h2>Want to get in touch ?</h2>
            <p>Click on my social links !</p>
            <p class="flex gap-4">
                <NuxtLink>github</NuxtLink>
                <NuxtLink>linkedin</NuxtLink>
            </p>
        </div>
    </div>
</template>