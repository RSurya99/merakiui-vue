<template>
  <div class="container max-w-screen-xl mx-auto mt-10">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold text-slate-800">Alert</h1>
      <div
        class="w-full p-8 bg-slate-100 dark:bg-slate-700 shadow-md rounded-lg flex flex-col space-y-2"
      >
        <Alert type="success" text="Hey, this is a success alert!" />
        <Alert type="info" text="Hey, this is a info alert!" />
        <Alert type="warning" text="Hey, this is a warning alert!" />
        <Alert type="error" text="Hey, this is a error alert!" />
        <Alert type="notification-pop" title="Hey, this is a notification pop!" />
        <Alert type="success" title="Hey, this is a success alert with full width!" full-width />
        <Alert type="info" title="Hey, this is a info alert with full width!" full-width />
        <Alert type="warning" title="Hey, this is a warning alert with full width!" full-width />
        <Alert type="error" title="Hey, this is a error alert with full width!" full-width />
      </div>
    </div>
  </div>
</template>
