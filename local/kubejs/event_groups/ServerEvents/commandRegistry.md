# ServerEvents.commandRegistry

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [CommandRegistryEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/command/CommandRegistryEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| dispatcher | CommandDispatcher<CommandSourceStack> | ✘ |
| context | CommandBuildContext | ✘ |
| selection | Commands$CommandSelection | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getArguments |  |  | ClassWrapper<ArgumentTypeWrappers> | ✘ |
| register | LiteralArgumentBuilder<CommandSourceStack> |  | LiteralCommandNode<CommandSourceStack> | ✘ |
| getCommands |  |  | ClassWrapper<Commands> | ✘ |
| getRegistry |  |  | CommandBuildContext | ✘ |
| getBuiltinSuggestions |  |  | ClassWrapper<SharedSuggestionProvider> | ✘ |
| isForSinglePlayer |  |  | boolean | ✘ |
| isForMultiPlayer |  |  | boolean | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
ServerEvents.commandRegistry((event) => {
	// This space (un)intentionally left blank
});
```

