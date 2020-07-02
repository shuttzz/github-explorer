import React, {useEffect} from "react";
import {Link, useRouteMatch} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

import api from "../../services/api";
import {Header, RepositoryInfo, Issues} from "./syles";
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();
    
    useEffect(() => {
        // api.get(`repos/${params.repository}`).then(reponse => {
        //
        // });
        //
        // api.get(`repos/${params.repository}/issues`).then(reponse => {
        //
        // });
        
        // async function loadData(): Promise<void> {
        //     const [repository, issues] = await Promise.all([
        //         api.get(`repos/${params.repository}`),
        //         api.get(`repos/${params.repository}/issues`)
        //     ]);
        // }
        //
        // loadData();
    }, [params.repository]);
    
    return <>
        <Header>
            <img src={logoImg} alt="Github Explorer" />
            <Link to="/">
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>
        
        <RepositoryInfo>
            <header>
                <img src="" alt="Alt" />
                <div>
                    <strong>shuttzz/nlw-rocketseat</strong>
                    <p>descrição do repositório</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1808</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues abertas</span>
                </li>
            </ul>
        </RepositoryInfo>
        
        <Issues>
            <Link to={"adsfadsf"}>
                <div>
                    <strong>asdfasdf</strong>
                    <p>asdfasd</p>
                </div>
        
                <FiChevronRight size={20} />
            </Link>
        </Issues>
    </>;
}

export default Repository;
