# Thunderbird Autotag

This filter automatically copies keywords from the previous message in a
thread.

It is based on a [Bug Bounties][1] resolution, but with some changes to make it
work nowadays.

[1]: https://bountify.co/thunderbird-plug-in-for-auto-tag-messages-based-on-previous-message-in-thread

## How to use
1. Install the [FiltaQuilla Add-on][2].
2. After installation, check the `JavaScript Action` mark in the `Filter
   Actions` tab of the add-on settings.
3. Restart Thunderbird.
4. Create a new filter:
   - Tick the `Checking mail` condition, make sure to select `After
     classification`.
   - Tick `Periodically, every 10 minutes`
   - In actions, select `JavaScript Action` and paste the contents of
     [autotag.js](autotag.js) into the JavaScript editor.

## Notes
- Tested with Thunderbird 68.4.1 and FiltaQuilla 2.0.
- The easiest debugging method is logging to the error console (`Menu -> Extras
  -> Developer Tools -> Error Console`) using the `console.log()` function.

[2]: https://github.com/RealRaven2000/FiltaQuilla
