<script>
	import {
		Mail,
		Github,
		ExternalLink,
		BrainIcon,
		Zap,
		SparklesIcon,
		RocketIcon,
		TwitterIcon,
		LinkedinIcon,
		BookOpenIcon
	} from '@lucide/svelte';
</script>

<footer class="bg-gray-900 text-white">
	<!-- Main Footer Content -->
	<div class="mx-auto max-w-7xl px-4 py-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Logo & Description -->
			<div class="lg:col-span-1">
				<!-- Logo -->
				<div class="mb-6 flex items-center gap-3">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
					>
						<BrainIcon class="h-6 w-6 text-white" />
					</div>
					<div>
						<span class="block text-xl font-bold text-white">TaskFlow</span>
						<span class="text-sm font-medium text-blue-400">AI-Powered Workflows</span>
					</div>
				</div>

				<!-- Description -->
				<p class="mb-6 leading-relaxed text-gray-300">
					Transform your productivity with intelligent workflow generation. Create, optimize, and
					automate your tasks with cutting-edge AI technology.
				</p>

				<!-- Social Links -->
				<div class="flex gap-3">
					<a
						href="https://github.com/your-repo/taskflow"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-200 hover:scale-105 hover:bg-gray-700 hover:text-white"
						title="GitHub"
					>
						<Github class="h-5 w-5" />
					</a>
					<a
						href="https://twitter.com/taskflow"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white"
						title="Twitter"
					>
						<TwitterIcon class="h-5 w-5" />
					</a>
					<a
						href="https://linkedin.com/company/taskflow"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:text-white"
						title="LinkedIn"
					>
						<LinkedinIcon class="h-5 w-5" />
					</a>
				</div>
			</div>

			<!-- Product Features -->
			<div>
				<h3 class="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
					<SparklesIcon class="h-5 w-5 text-blue-400" />
					AI Features
				</h3>
				<ul class="space-y-3">
					<li>
						<div
							class="flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-blue-400"
						>
							<BrainIcon class="h-4 w-4 text-blue-400" />
							<span>Smart Generation</span>
						</div>
					</li>
					<li>
						<div
							class="flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-indigo-400"
						>
							<Zap class="h-4 w-4 text-indigo-400" />
							<span>Auto Optimization</span>
						</div>
					</li>
					<li>
						<div
							class="flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-purple-400"
						>
							<RocketIcon class="h-4 w-4 text-purple-400" />
							<span>Quick Deploy</span>
						</div>
					</li>
					<li>
						<div
							class="flex items-center gap-2 text-gray-300 transition-colors duration-200 hover:text-green-400"
						>
							<SparklesIcon class="h-4 w-4 text-green-400" />
							<span>Real-time Analytics</span>
						</div>
					</li>
				</ul>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
					<ExternalLink class="h-5 w-5 text-blue-400" />
					Quick Links
				</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="/"
							class="flex items-center gap-2 text-gray-300 decoration-blue-400 underline-offset-4 transition-colors duration-200 hover:text-blue-400 hover:underline"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
							Home
						</a>
					</li>
					<li>
						<a
							href="/signin"
							class="flex items-center gap-2 text-gray-300 decoration-blue-400 underline-offset-4 transition-colors duration-200 hover:text-blue-400 hover:underline"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>
							Try Free
						</a>
					</li>
					<li>
						<a
							href="/dashboard"
							class="flex items-center gap-2 text-gray-300 decoration-blue-400 underline-offset-4 transition-colors duration-200 hover:text-blue-400 hover:underline"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="/pricing"
							class="flex items-center gap-2 text-gray-300 decoration-blue-400 underline-offset-4 transition-colors duration-200 hover:text-blue-400 hover:underline"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
							Pricing
						</a>
					</li>
				</ul>
			</div>

			<!-- Resources & Support -->
			<div>
				<h3 class="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
					<BookOpenIcon class="h-5 w-5 text-green-400" />
					Resources
				</h3>
				<ul class="space-y-4">
					<li>
						<a
							href="/docs"
							class="group flex items-center gap-3 text-gray-300 transition-colors duration-200 hover:text-green-400"
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600/20 transition-colors duration-200 group-hover:bg-green-600/30"
							>
								<BookOpenIcon class="h-4 w-4 text-green-400" />
							</div>
							<div>
								<span class="text-sm font-medium">Documentation</span>
								<p class="text-xs text-gray-400">Get started guide</p>
							</div>
						</a>
					</li>
					<li>
						<a
							href="/api"
							class="group flex items-center gap-3 text-gray-300 transition-colors duration-200 hover:text-blue-400"
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 transition-colors duration-200 group-hover:bg-blue-600/30"
							>
								<Zap class="h-4 w-4 text-blue-400" />
							</div>
							<div>
								<span class="text-sm font-medium">API Reference</span>
								<p class="text-xs text-gray-400">Developer tools</p>
							</div>
						</a>
					</li>
					<li>
						<a
							href="mailto:support@taskflow.ai"
							class="group flex items-center gap-3 text-gray-300 transition-colors duration-200 hover:text-indigo-400"
						>
							<div
								class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 transition-colors duration-200 group-hover:bg-indigo-600/30"
							>
								<Mail class="h-4 w-4 text-indigo-400" />
							</div>
							<div>
								<span class="text-sm font-medium">Support</span>
								<p class="text-xs text-gray-400">support@taskflow.ai</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom Footer -->
	<div class="border-t border-gray-800 bg-gray-950">
		<div class="mx-auto max-w-7xl px-4 py-6">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<div class="flex items-center gap-4">
					<p class="text-sm text-gray-400">
						&copy; {new Date().getFullYear()} TaskFlow AI. All rights reserved.
					</p>
					<div class="flex items-center gap-2">
						<span
							class="inline-flex items-center rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 px-3 py-1 text-xs font-medium text-blue-400"
						>
							<span class="mr-1 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400"></span>
							AI Powered
						</span>
					</div>
				</div>

				<div class="flex items-center gap-4">
					<div class="flex items-center gap-4 text-sm text-gray-400">
						<a href="/privacy" class="transition-colors hover:text-blue-400">Privacy</a>
						<a href="/terms" class="transition-colors hover:text-blue-400">Terms</a>
						<a href="/cookies" class="transition-colors hover:text-blue-400">Cookies</a>
					</div>

					<a
						href="https://github.com/your-repo/taskflow"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm text-white transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
					>
						<Github class="h-4 w-4" />
						<span>Star on GitHub</span>
						<ExternalLink class="h-3 w-3" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
