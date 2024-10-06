## SE2-Gun-Extension

The SE2-Gun-Extension is a plugin for SE2 that provides a ready to go installation of Gun and the Gun-Eth plugin.

[SE2-Gun-Extension](https://github.com/scobru/se2-gun-extension)
[SE2-Gun-Docs](https://github.com/scobru/se2-gun/blob/main/README.md)

### How to install

```bash
npx create-eth@latest -e {scobru/se2-gun-extension}
```

Go to [localhost:3000/se2-gun-extension](http://localhost:3000/se2-gun-extension) and you should see the Gun-Eth plugin installed.

## Important Notice ⚠️

**Attention**: Currently, this Gun.js implementation is not connected to any external relay. As a result, all data saved and managed through Gun will exclusively use your browser's local storage. This means:

1. Data will not persist across different browser sessions or devices.
2. Data sharing between users will be limited.
3. Clearing your browser cache will result in the loss of all saved data.

It is recommended to use this configuration for development and testing purposes only. For a complete and functional implementation in a production environment, it is necessary to configure and connect Gun to appropriate relays to ensure data persistence and synchronization.
