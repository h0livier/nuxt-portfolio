<script setup lang="ts">
import PricingCard from '~/components/services/pricing/card.vue'
import ServicesSection from '~/components/services/Section.vue'

interface Presentation {

}

interface Pricing {
    title: string
    price: string
    features: string[]
    message: string
}
const pricings: Pricing[] = [
    {title: 'Pack Boost', message: 'Boostez vos visibilité grâce à une landing page optimisée et sur mesure.', price: '250€', features: ['Design sur mesure', 'Responsive design', 'Optimisation SEO', 'Intégration de contenu']},
    {title: 'Pack Starter', message: 'Idéal pour lancer votre boutique en ligne rapidement et efficacement.', price: '500€', features: ['Design sur mesure', 'Responsive design', 'Optimisation SEO', 'Intégration de produits', 'Paiement en ligne sécurisé']},
    {title: 'Pack Premium', message: 'Pour les entreprises qui souhaitent un site web complet avec des fonctionnalités avancées.', price: '1000€', features: ['Design sur mesure', 'Responsive design', 'Optimisation SEO', 'Fonctionnalités personnalisées']},
    {title: 'Pack Evolution', message: 'Un abonnement mensuel pour faire évoluer votre site web en continu.', price: '50€/mois', features: ['Design sur mesure', 'Responsive design', 'Optimisation SEO', 'Fonctionnalités personnalisées']}
]
</script>
<template>
    <div data-theme="nordddd">

        <!-- Hero section -->
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.olivierhayot.be/web/image/website.s_empowerment_default_image"
                    class="max-w-md h-[60vh] rounded-lg shadow-2xl"
                />
                <div>
                    <div class="badge badge-outline px-5 py-4 rounded-2xl">Envie d'un site web ? <span class="text-primary">Contactez moi !</span></div>
                    <h1 class="text-5xl font-bold my-10">Création de sites web professionnels adaptés à vos objectifs</h1>
                    <p class="py-6">
                        Je crée des sites modernes, rapides et sur mesure, qui reflètent votre image et transforment vos visiteurs en clients.
                    </p>
                    <button class="btn btn-primary me-3">A propos</button>
                    <button class="btn btn-primary">Me contacter</button>
                </div>
            </div>
        </div>

        <!-- Services section -->
        <ServicesSection :title="'Donnez vie à votre présence en ligne'" :description="'Je conçois des sites web sur mesure, modernes et performants, qui reflètent parfaitement votre identité et attirent vos clients. Que vous lanciez votre première vitrine ou que vous vouliez booster votre boutique en ligne, je transforme vos idées en un site concret et efficace.'">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <p class="text-2xl font-bold mb-5">01</p>
                    <p>
                        <img src="https://www.olivierhayot.be/web_editor/shape/theme_buzzy/s_accordion_image.svg?c1=o-color-1" 
                        class="max-w-full h-auto rounded-lg shadow-md" />
                        <span class="font-bold">Prise de contact</span> - On discute de votre projet, vos besoins et vos objectifs pour comprendre exactement ce que vous souhaitez. 
                    </p>
                </div>
                <div>
                    <p class="text-2xl font-bold mb-5">02</p>
                    <p>
                        <img src="https://www.olivierhayot.be/web_editor/shape/theme_buzzy/s_banner.svg?c1=o-color-1" 
                        class="max-w-full h-auto rounded-lg shadow-md" />
                        <span class="font-bold">Conception & maquettes</span> - Je crée des maquettes et un design sur mesure, en accord avec votre image et vos préférences. 
                    </p>
                </div>
                <div>
                    <p class="text-2xl font-bold mb-5">03</p>
                    <p>
                        <img src="https://www.olivierhayot.be/web_editor/shape/theme_buzzy/s_media_list-03.svg?c1=o-color-1" 
                        class="max-w-full h-auto rounded-lg shadow-md" />
                        <span class="font-bold">Développement & tests</span> - Je développe le site, intègre les fonctionnalités et effectue des tests pour garantir performance et compatibilité.
                    </p>
                </div>
                <div>
                    <p class="text-2xl font-bold mb-5">04</p>
                    <p>
                        <img src="https://www.olivierhayot.be/web_editor/shape/theme_buzzy/s_three_columns-01.svg?c1=o-color-1" 
                        class="max-w-full h-auto rounded-lg shadow-md" />
                        <span class="font-bold">Mise en ligne & accompagnement</span> - Votre site est mis en ligne, optimisé pour le SEO et vous êtes formé pour le gérer facilement. 
                    </p>
                </div>
            </div>
        </ServicesSection>

        <!-- Pricing section -->
        <ServicesSection title="Mes tarifs" description="Je propose des packs adaptés à vos besoins, allant de la création d'un site vitrine simple à des solutions plus complètes avec fonctionnalités avancées. Chaque pack est conçu pour offrir un excellent rapport qualité-prix et vous aider à atteindre vos objectifs en ligne.">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <PricingCard v-for="(pricing, index) in pricings" :key="pricing.title + index"
                    :message="pricing.message"
                    :title="pricing.title" 
                    :price="pricing.price" 
                    :features="pricing.features" 
                    :button="'Choisir ce plan'" />
            </div>
        </ServicesSection>

    </div>
</template>