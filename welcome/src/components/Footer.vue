<template>
    <footer style="z-index: 10;" class="w-full py-6 text-sm text-center md:text-left fade-in">
        <div class="pl-6">
            <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; Micro Music UI {{ new Date().getFullYear() }}</a>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
</style>
