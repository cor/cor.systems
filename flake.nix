{
  description = "Svelte flake template";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    gitignore.url = "github:hercules-ci/gitignore.nix";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };
  outputs = inputs@{ self, nixpkgs, gitignore, flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; }
     {
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }:
      let
        inherit (gitignore.lib) gitignoreSource;
      in 
      {
          packages = rec {
            site-src = pkgs.mkYarnPackage rec {
              name = "cor.systems-site-${version}";
              version = "0.0.1";
              src = gitignoreSource ./.;
              packageJson = "${src}/package.json";
              yarnLock = "${src}/yarn.lock";
              buildPhase = ''
                yarn --offline build 
              '';
              distPhase = "true";
            };            

            site = pkgs.writeShellApplication {
              name = "cor.systems-server";

              runtimeInputs = [ site-src pkgs.nodejs ];

              text = ''
                node ${site-src}/libexec/cor.systems/deps/cor.systems/build
              '';
            };          
          };
          
          devShells = {
            default = pkgs.mkShell {
              buildInputs = (with pkgs; [ nodejs nil nodePackages.svelte-language-server nodePackages.typescript-language-server ]);
            };
          };
        };
    };
}
