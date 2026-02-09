<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#eb1920",
                "background-light": "#f8f6f6",
                "background-dark": "#090C0E", // Updated to the requested Charcoal
                "card-dark": "#161B1E",
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>