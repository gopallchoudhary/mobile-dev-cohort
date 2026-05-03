import { useState, useEffect } from "react";
import "./Github.css";

const Github = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchGithubData = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/users/gopallchoudhary",
				);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.error("Error fetching GitHub data:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchGithubData();
	}, []);

	return (
		<div className="github-container">
			{isLoading ? (
				<div className="loading">
					<div className="spinner"></div>
					<p>Loading profile...</p>
				</div>
			) : data ? (
				<div className="github-profile">
					<div className="profile-header">
						<img src={data.avatar_url} alt={data.name} className="avatar" />
						<div className="header-info">
							<h1>{data.name}</h1>
							<p className="username">@{data.login}</p>
						</div>
					</div>

					{data.bio && <p className="bio">{data.bio}</p>}

					<div className="stats">
						<div className="stat">
							<span className="stat-label">Followers</span>
							<span className="stat-value">{data.followers}</span>
						</div>
						<div className="stat">
							<span className="stat-label">Following</span>
							<span className="stat-value">{data.following}</span>
						</div>
						<div className="stat">
							<span className="stat-label">Public Repos</span>
							<span className="stat-value">{data.public_repos}</span>
						</div>
					</div>

					<div className="profile-meta">
						{data.location && (
							<div className="meta-item">
								<span className="meta-label">📍</span>
								<span>{data.location}</span>
							</div>
						)}
						{data.company && (
							<div className="meta-item">
								<span className="meta-label">🏢</span>
								<span>{data.company}</span>
							</div>
						)}
						{data.blog && (
							<div className="meta-item">
								<span className="meta-label">🔗</span>
								<a href={data.blog} target="_blank" rel="noopener noreferrer">
									{data.blog}
								</a>
							</div>
						)}
					</div>

					<a
						href={data.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="view-profile-btn"
					>
						View on GitHub
					</a>
				</div>
			) : (
				<div className="error">
					<p>Failed to load profile</p>
				</div>
			)}
		</div>
	);
};

export default Github;
