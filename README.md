# Thunderbird Autotag

This filter automatically copies keywords from the previous message in a
thread.

It is based on a [Bug Bounties][1] resolution, but with some changes to make it
work nowadays.

[1]: https://bountify.co/thunderbird-plug-in-for-auto-tag-messages-based-on-previous-message-in-thread

## How to use
1. Install the [FiltaQuilla Add-on][2]. As of now with Thunderbird 52.6.0 the
   add-on works perfectly fine despite the compatibility flags saying
   otherwise. Therefore the add-on file needs to be downloaded and installed
   manually.
2. After installation, check the `JavaScript Action` mark in the `Filter
   Actions` tab of the add-on settings.
3. Restart Thunderbird.
4. Create a new filter:
   - When using the `Checking mail` condition, make sure to select `After
     classification`.
   - In actions, select `JavaScript Action` and paste the contents of
     [autotag.min.js](autotag.min.js) into the text field.
     **Warning:** Using `autotag.js` might corrupt the filter settings file!

[2]: https://addons.mozilla.org/en-US/thunderbird/addon/filtaquilla/
