{
  description = "TACEO documentation site";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            yarn
          ];

          shellHook = ''
            echo "TACEO docs development environment"
            echo "Node.js $(node --version)"
            echo ""
            echo "Commands:"
            echo "  yarn        - Install dependencies"
            echo "  yarn start  - Start dev server"
            echo "  yarn build  - Build for production"
          '';
        };
      }
    );
}
