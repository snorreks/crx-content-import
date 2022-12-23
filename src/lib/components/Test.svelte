<script>
  import { BaseAvatar, BaseDivider } from "$libs/svelte";
</script>

<div id="nice-crx-overlay">
  <BaseDivider/>
  <img src="https://petapixel.com/assets/uploads/2022/07/DALLEcopy.jpg" />
</div>

<style>
#nice-crx-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(7, 51, 92, 0.808);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}


#nice-crx-overlay img {
  width: 66vmin;
  box-shadow: 0 0 3rem 1rem rgba(0, 0, 0, 0.5);
}
</style>