#!/bin/bash

# Nom du fichier contenant les URLs
file="scripts/audio-urls.txt"

# Créer un répertoire pour les téléchargements s'il n'existe pas déjà
download_dir="static/audioassets"
mkdir -p "$download_dir"

# Parcourir le fichier texte
while IFS= read -r url; do
    # Extraire le nom du sous-dossier à partir de l'URL
    subdir=$(basename "$(dirname "$url")")

    # Créer un sous-dossier pour le fichier s'il n'existe pas déjà
    subdir_path="$download_dir/$subdir"
    mkdir -p "$subdir_path"

    # Télécharger le fichier dans le sous-dossier correspondant
    wget -P "$subdir_path" "$url"
done < "$file"
