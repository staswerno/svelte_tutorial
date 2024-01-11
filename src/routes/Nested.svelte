<div class="nested-component-container">
    <div>
        <p>this content is from a <i>nested</i> component</p>
    </div>
    <div>
        <p>notice that the styles from <code>+page.svelte</code> don't apply here</p>
    </div>
</div>

<style>
    .nested-component-container {
        border: 3px solid midnightblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }                       
</style>