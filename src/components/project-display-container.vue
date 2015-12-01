<style lang="sass" scoped>
    .project-display-container {
        display: flex;
    }

    .header {
        p {
            font-family: Helvetica;
            font-size: 24px;
        }
    }
</style>

<template>
    <div class="header">
        <p>Projects</p>
    </div>
    <div class="project-display-container">
        <!-- project display's go here !-->
        <slot>
    </div>
</template>
