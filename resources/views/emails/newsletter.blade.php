
<!DOCTYPE html>
<html>
<head>
    <title>Newsletter</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 py-10">

    <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <!-- Header -->
        <div class="bg-indigo-600 text-white text-center py-6 px-4">
            <h1 class="text-3xl font-bold">Your Company</h1>
            <p class="text-sm opacity-90">Monthly Newsletter</p>
        </div>

        <!-- Hero -->
        <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">
                🚀 Big Updates This Month
            </h2>
            <p class="text-gray-600 mb-4">
                Stay up to date with our latest features, news, and tips.
            </p>

            <div class="text-gray-700 leading-relaxed">
                {!! $content !!}
            </div>
        </div>

        <!-- CTA -->
        <div class="px-6 pb-6">
            <a href="#"
               class="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Read More
            </a>
        </div>

        <!-- Divider -->
        <div class="border-t"></div>

        <!-- Secondary Section -->
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
                🔥 Featured Update
            </h3>
            <p class="text-gray-600">
                We’ve improved performance and added new features to make your experience smoother.
            </p>
        </div>

        <!-- Footer -->
        <div class="bg-gray-50 text-center text-sm text-gray-500 p-6">
            <p>© 2026 Your Company. All rights reserved.</p>
            <p class="mt-2">
                <a href="#" class="underline">Unsubscribe</a> •
                <a href="#" class="underline">Contact</a>
            </p>
        </div>

    </div>

</body>
</html>