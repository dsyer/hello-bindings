with import <nixpkgs> { };

mkShell {

  name = "env";
  buildInputs = [
    figlet nodejs
  ];

  shellHook = ''
    figlet -- '-:bindings:-'
  '';

}