{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:
{
  # https://devenv.sh/basics/
  # https://devenv.sh/packages/
  packages = [
  ];

  # https://devenv.sh/languages/
  languages.typescript.enable = true;
  languages.javascript = {
    enable = true;
    pnpm.enable = true;
  };

  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/scripts/
  # scripts.hello.exec = ''
  #   echo hello from $GREET
  # '';

  enterShell = '''';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = '''';

  # https://devenv.sh/git-hooks/
  git-hooks.hooks = {
    nixfmt-rfc-style.enable = true;
    shellcheck.enable = true;
    prettier.enable = true;
  };

  # claude.code.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
