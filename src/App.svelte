<script lang="ts">
  import { onMount } from "svelte";
  import * as component from "./lit-component/vite_lit";
  import { getUsers } from "./services/user-service";
  import type { User } from "./types/user";

  let loading = true;
  let isPopupShown = false;
  let users: User[] = [];
  let selectedUser = {
    title: "",
    description: "",
    isShown: false,
    isBackdropBlurred: true,
  };

  onMount(() => {
    loading = true;
    getUsers(1000).then((data) => {
      users = data;
      loading = false;
    });
  });

  $: if (users) {
    setTimeout(() => {
      const userCards = document.querySelectorAll("user-card");
      userCards.forEach(
        (usercard) => (usercard.onFollowClickedCB = onFollowClicked)
      );
    }, 0);
  }

  function onFollowClicked(data: { status: boolean } & User) {
    selectedUser = {
      ...selectedUser,
      title: data.status ? "Started Following" : "Unfollowed",
      description: `${data.status ? "Following user: " : "UnFollowed user: "} ${
        data.name
      }`,
      isShown: true,
    };
  }
</script>

<main>
  <div class="user-container">
    {#if loading}
      <div class="loading">Loading...</div>
    {:else}
      {#each users as user}
        <user-card {user} />
      {/each}
    {/if}
  </div>
  <custom-popup props={selectedUser} />
</main>

<style>
  .user-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 34px;
  }
</style>
