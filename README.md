# Masked Password Man

This is a chrome extension that helps you type passwords in masked passwords inputs.

## how it works:

1. the script injects a regular password input under masked inputs
1. you type your password there (or let your password manager fill it for you)
1. hints with characters are rendered under masked inputs so you know which characters to type

## TODO:

- [x] pekao24.pl
    - [x] main loop
    - [x] auto-focus password input
    - [x] auto-focus first active input after password submit
    - [x] improve styling of password input
    - [x] handle 'Dalej' button correctly
    - [x] handle https://www.platnosci.pekao24.pl/e-zakupy/logowanie
- [ ] feedback to user that masked password man is watching
- [x] setup pipeline to build an unpacked and packed version of the extension
- [ ] publish to chrome web store
- ???

## Attributions

<a href="https://iconscout.com/icons/mask" target="_blank">Free Mask Icon</a> by <a href="https://iconscout.com/contributors/daniel-bruce" target="_blank">Daniel Bruce</a>
