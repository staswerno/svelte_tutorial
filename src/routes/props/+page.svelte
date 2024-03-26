<script>
	import Nested from './Nested.svelte';
    import PackageInfo from './PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};
</script>

<div>
	<Nested answer={42} />  
	<!-- we are not using the answer prop, so it uses the default value -->
	<Nested />

	<!-- we can spread props, so the below... -->
	<PackageInfo
		name={pkg.name}
		speed={pkg.speed}
		version={pkg.version}   
		website={pkg.website}
	/>

	<!-- can be written easier as such -->
	<PackageInfo {...pkg} />
</div>
