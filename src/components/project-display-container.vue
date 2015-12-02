<style lang="sass" scoped>
    .project-display-container {
        display: flex;
    }

    .header {
        padding: 0.5em;
        p {
            font-size: 4em;
            margin: 0;
        }
    }
</style>

<template>
    <div class="header">
        <p>Projects</p>
        <hr>
    </div>
    <div class="project-display-container">
        <!-- project disply's go here !-->
        <slot>
    </div>
</template>
