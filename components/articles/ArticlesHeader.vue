<template>
  <b-container fluid class="text-center bg-secondary p-5">
    <b-row class="mb-3">
      <b-col>
        <slot name="title" />
        <ArticlesHeaderBreadcrumb />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ArticlesHeaderTagbadge />
      </b-col>
    </b-row>
  </b-container>
</template>
